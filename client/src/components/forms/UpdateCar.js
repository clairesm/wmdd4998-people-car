import { Button, Input, Select, Form } from 'antd';
// import Form from 'antd/es/form/Form';
import { useEffect, useState } from 'react';

const { Option } = Select;

const UpdateCar = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Form
      form={form}
      name='update-car-form'
      layout='inline'
      size='medium'
    >
      <Form.Item
        name='year'
        rules={[
          {
            required: true,
            message: 'Please input a year!',
          },
        ]}
      >
        <Input placeholder='Year' />
      </Form.Item>

      <Form.Item
        name='make'
        rules={[
          {
            required: true,
            message: 'Please input a make!',
          },
        ]}
      >
        <Input placeholder='Make' />
      </Form.Item>

      <Form.Item
        name='model'
        rules={[
          {
            required: true,
            message: 'Please input a model!',
          },
        ]}
      >
        <Input placeholder='Model' />
      </Form.Item>

      <Form.Item
        name='price'
        rules={[
          {
            required: true,
            message: 'Please input a price!',
          },
        ]}
      >
        <Input placeholder='Price' />
      </Form.Item>

      <Form.Item
        name='personId'
        label='Person'
        rules={[{ required: true }]}
      >
        <Select placeholder='Select a person'>
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
        </Select>
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              (!form.isFieldTouched('year') &&
                !form.isFieldTouched('make') &&
                !form.isFieldTouched('model') &&
                !form.isFieldTouched('price') &&
                !form.isFieldTouched('personId')) ||
              form
                .getFieldsError()
                .filter(({ errors }) => errors.length)
                .length
            }
          >
            Update Car
          </Button>
        )}
      </Form.Item>
      <Button onClick={props.onButtonClick}>Cancel</Button>
    </Form>
  );
};

export default UpdateCar;
