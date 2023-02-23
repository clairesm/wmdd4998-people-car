import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Button, Divider, Form, Input } from 'antd';
import { Typography } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_PERSON, GET_PEOPLE } from '../../queries';

const { Title } = Typography;

const getStyles = () => ({
  formItem: {
    flex: '0 1 auto',
  },
});

const AddPerson = () => {
  const styles = getStyles();
  const [id, setId] = useState(uuidv4());
  const [addPerson] = useMutation(ADD_PERSON);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate([]);
  }, []);

  const onFinish = (values) => {
    const { firstName, lastName } = values;

    addPerson({
      variables: {
        id,
        firstName,
        lastName,
      },
      update: (cache, { data: { addPerson } }) => {
        const data = cache.readQuery({ query: GET_PEOPLE });
        cache.writeQuery({
          query: GET_PEOPLE,
          data: {
            ...data,
            people: [...data.people, addPerson],
          },
        });
      },
    });
    form.resetFields();
  };

  return (
    <>
      <Divider>
        <Title level={4} style={{ textAlign: 'center' }}>
          Add Person
        </Title>
      </Divider>
      <Form
        form={form}
        name='add-person-form'
        layout='inline'
        onFinish={onFinish}
        size='medium'
        style={{
          marginBottom: '40px',
          justifyContent: 'space-evenly',
          flexWrap: 'nowrap',
          alignItems: 'flex-end',
        }}
      >
        <Form.Item
          label='First Name'
          name='firstName'
          rules={[
            {
              required: true,
              message: `Please input a first name!`,
            },
          ]}
          style={styles.formItem}
        >
          <Input placeholder='First Name'></Input>
        </Form.Item>
        <Form.Item
          label='Last Name'
          name='lastName'
          rules={[
            {
              required: true,
              message: `Please input a last name!`,
            },
          ]}
          style={styles.formItem}
        >
          <Input
            placeholder='Last Name'
            style={{ minWidth: '50%' }}
          ></Input>
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              disabled={
                !form.isFieldsTouched(true) ||
                form
                  .getFieldsError()
                  .filter(({ errors }) => errors.length)
                  .length
              }
              style={styles.formItem}
            >
              Add Person
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default AddPerson;
