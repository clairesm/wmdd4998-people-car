import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Typography } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_CAR, GET_CARS } from '../../queries';

const { Title } = Typography;
const { Option } = Select;

const AddCar = () => {
  const [id, setId] = useState(uuidv4());
  const [addCar] = useMutation(ADD_CAR);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate([]);
  }, []);

  const onFinish = (values) => {
    const { year, make, model, price, personId } = values;

    addCar({
      variables: {
        id,
        year,
        make,
        model,
        price,
        personId,
      },
      update: (cache, { data: { addCar } }) => {
        const data = cache.readQuery({ query: GET_CARS });
        cache.writeQuery({
          query: GET_CARS,
          data: {
            ...data,
            cars: [...data.cars, addCar],
          },
        });
      },
    });
  };

  return (
    <>
      <Title level={3}>Add Car</Title>
      <Form
        form={form}
        name='add-car-form'
        layout='inline'
        onFinish={onFinish}
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
          <Input placeholder='Year'></Input>
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
          <Input placeholder='Make'></Input>
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
                !form.isFieldsTouched(true) ||
                form
                  .getFieldError()
                  .filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add Car
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCar;
