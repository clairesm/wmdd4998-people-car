import { Button, Input } from 'antd';
import Form from 'antd/es/form/Form';
import Title from 'antd/es/typography/Title';
import { useEffect, useState } from 'react';

const UpdatePerson = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <div style={{ marginTop: 16 }}>
      <Title level={5}>Update Person</Title>
      <Form
        form={form}
        name='update-person-form'
        layout='inline'
        size='medium'
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
          <Input placeholder='i.e. John' />
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
          <Input placeholder='i.e. Smith' />
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
      </Form>
    </div>
  );
};

export default UpdatePerson;
