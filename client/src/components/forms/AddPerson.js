// import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const AddPerson = () => {
  //   const [id, setId] = useState(uuidv4());

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate([]);
  }, []);

  const onFinish = (values) => {
    console.log('values', values);
  };

  return (
    <>
      <Title level={3}>Add Person</Title>
      <Form
        form={form}
        name='add-person-form'
        layout='inline'
        onFinish={onFinish}
        size='medium'
        style={{ marginBottom: '40px' }}
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
        >
          <Input placeholder='Last Name'></Input>
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
