import React, { useState } from 'react';
import './Form.css';
import Telegramm from '../../../public/telegram.png';
import Whatsapp from '../../../public/whatsapp.png';
import { Button, Checkbox, Form, Input, Switch, Modal, Select, message } from 'antd';
import emailjs from 'emailjs-com';

const { Option } = Select;

const AppForm: React.FC = () => {
  const [mainForm] = Form.useForm(); // основная форма
  const [modalForm] = Form.useForm(); // форма в модалке
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mainFormData, setMainFormData] = useState<any>({});

  const onMainFinish = (values: any) => {
    setMainFormData(values);
    setIsModalVisible(true);
  };

  const handleModalOk = async () => {
    try {
      const modalValues = await modalForm.validateFields();

      if (!modalValues.consent) {
        message.error('Вы должны согласиться на обработку персональных данных.');
        return;
      }

      const allData = { ...mainFormData, ...modalValues };

      const purposeLines = [];
      if (allData.purpose1) purposeLines.push('Запуск контекстной рекламы');
      if (allData.purpose2) purposeLines.push('Сбор зрителей/посетителей');
      if (allData.purpose3) purposeLines.push('Промо-акция');

      const sendTo = [];
      if (allData.sendToTelegram) sendTo.push('Telegram');
      if (allData.sendToWhatsapp) sendTo.push('WhatsApp');

      const templateParams = {
        message: `
      Новая заявка на лендинг

      Цель:
      ${purposeLines.join(', ') || 'Не указано'}

      Ниша: ${allData.niche || 'Не указана'}
      Фото/видео материалы: ${allData.hasMaterials ? 'Нет' : 'Есть'}
      Телефон: +${allData.prefix}${allData.phone}

      Отправить в: ${sendTo.join(', ') || 'Не выбрано'}
        `
      };

      await emailjs.send(
        'service_hq40vl9',
        'template_ks6jnfb',
        templateParams,
        '56-10ACDPZfV8wRob'
      );

      message.success('Данные успешно отправлены!');
      mainForm.resetFields();
      modalForm.resetFields();
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
      message.error('Ошибка при отправке данных.');
    }
  };

  const handleModalCancel = () => setIsModalVisible(false);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue="7">
      <Select style={{ width: 70 }}>
        <Option value="7">+7</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='form_conteiner'>
      <Form
        form={mainForm}
        layout="vertical"
        onFinish={onMainFinish}
        className='form__conteiner'
      >
        <p className='form__p1'>
          Ответьте на <strong>три</strong> вопроса и получите <strong>примеры</strong> самых эффективных <strong>лендингов</strong> в вашей нише
        </p>

        <div className='form__conteiner2'>
          <div className='form__check'>
            <p className='form__p2'><strong>Для чего вам нужен лендинг?</strong></p>
            <Form.Item name="purpose1" valuePropName="checked" style={{ marginBottom: 3 }}>
              <Checkbox className='form_input'>Для запуска контекстной рекламы</Checkbox>
            </Form.Item>
            <Form.Item name="purpose2" valuePropName="checked" style={{ marginBottom: 3 }}>
              <Checkbox className='form_input'>Собрать зрителей / посетителей на мероприятие</Checkbox>
            </Form.Item>
            <Form.Item name="purpose3" valuePropName="checked" style={{ marginBottom: 3 }}>
              <Checkbox className='form_input'>Привлечение к промо-акции</Checkbox>
            </Form.Item>
          </div>

          <div className='form__check'>
            <p className='form__p2'><strong>Какая у вас деятельность?</strong></p>
            <Form.Item name="niche">
              <Input placeholder="ваша ниша" />
            </Form.Item>
          </div>

          <div className='form__check'>
            <p className='form__p2'><strong>У вас есть фото-видеоматериалы?</strong></p>
            <Form.Item className='form_input' name="hasMaterials" valuePropName="checked">
              Нет <Switch /> Да, есть
            </Form.Item>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30, marginBottom: 30 }}>
          <Button className='form__btn' type="primary" htmlType="submit">
            Получить подборку лучших лендингов
          </Button>
        </div>
      </Form>

      <Modal
      className="custom-modal"
        title="Куда вам направить подборку?"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Отправить"
        cancelText="Закрыть"
        okButtonProps={{ className: 'modal__ok-btn' }}
      >
        <Form form={modalForm} layout="vertical">

          <div className='modal_check'>
          <Form.Item name="sendToTelegram" valuePropName="checked">
            <Checkbox >
              <img className="form__icon" src={Telegramm} alt="" /> 
            </Checkbox>
          </Form.Item>

          <Form.Item name="sendToWhatsapp" valuePropName="checked">
            <Checkbox>
              <img className="form__icon" src={Whatsapp} alt="" />
            </Checkbox>
          </Form.Item>
          </div>
          <Form.Item
            name="phone"
            label="Номер телефона"
            rules={[{ required: true, message: 'Пожалуйста, введите номер' }]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>

          <Form.Item
            name="consent"
            valuePropName="checked"
            rules={[{
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Необходимо согласие'),
            }]}
          >
            <Checkbox>
              Я согласен(а) на обработку персональных данных
            </Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AppForm;

