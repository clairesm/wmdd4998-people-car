import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const AddCar = () => {
  const [id, setId] = useState(uuidv4());

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate([]);
  }, []);

  return (
    <>
      <Title level={3}>Add Car</Title>
      <Form
        form={form}
        name='add-car-form'
        layout='inline'
        size='medium'
        style={{ marginBottom: '40px' }}
      >
        <Form.Item
          label='Year'
          name='year'
          rules={[
            {
              required: true,
              message: `Please input a year!`,
            },
          ]}
        >
          <Input placeholder='Make'></Input>
        </Form.Item>
        <Form.Item
          label='Make'
          name='make'
          rules={[
            {
              required: true,
              message: `Please input a car make!`,
            },
          ]}
        >
          <Input placeholder='Last Name'></Input>
        </Form.Item>
        <Form.Item
          label='Model'
          name='model'
          rules={[
            {
              required: true,
              message: `Please input a car model!`,
            },
          ]}
        >
          <Input placeholder='Model'></Input>
        </Form.Item>
        <Form.Item
          label='Price'
          name='price'
          rules={[
            {
              required: true,
              message: `Please input the car's price!`,
            },
          ]}
        >
          <Input placeholder='Price'></Input>
        </Form.Item>
        <Form.Item
          name='select-person'
          label='Person'
          rules={[{ required: true }]}
        >
          <Select placeholder='Select a person'>
            <Option value='person-1'>Person 1</Option>
            <Option value='person-2'>Person 2</Option>
            <Option value='person-3'>Person 3</Option>
          </Select>
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              disabled={
                !form.isFieldsTouched(true) ||
                form
                  .getFieldError()
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

export default AddCar;
