import { useMutation } from '@apollo/client';
import { Button, Input } from 'antd';
import Form from 'antd/es/form/Form';
import Title from 'antd/es/typography/Title';
import { useEffect, useState } from 'react';
import { UPDATE_PERSON } from '../../queries';

const UpdatePerson = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(
    props.firstName
  );
  const [lastName, setLastName] = useState(props.lastName);

  const [updatePerson] = useMutation(UPDATE_PERSON);

  useEffect(() => {
    forceUpdate();
  }, []);

  const onFinish = (values) => {
    const { firstName, lastName } = values;
    updatePerson({
      variables: {
        id,
        firstName,
        lastName,
      },
    });
    props.onButtonClick();
  };

  const updateStateVariable = (variable, value) => {
    props.updateStateVariable(variable, value);
    switch (variable) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      <Title level={5}>Update Person</Title>
      <Form
        form={form}
        name='update-person-form'
        layout='inline'
        onFinish={onFinish}
        size='medium'
        initialValues={{
          firstName: firstName,
          lastName: lastName,
        }}
      >
        <Form.Item
          name='firstName'
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input
            placeholder='i.e. John'
            onChange={(e) =>
              updateStateVariable(
                'firstName',
                e.target.value
              )
            }
          />
        </Form.Item>
        <Form.Item
          name='lastName'
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input
            placeholder='i.e. Smith'
            onChange={(e) =>
              updateStateVariable(
                'lastName',
                e.target.value
              )
            }
          />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              disabled={
                (!form.isFieldTouched('firstName') &&
                  !form.isFieldTouched('lastName')) ||
                form
                  .getFieldsError()
                  .filter(({ errors }) => errors.length)
                  .length
              }
            >
              Update Person
            </Button>
          )}
        </Form.Item>
        <Button onClick={props.onButtonClick}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default UpdatePerson;
