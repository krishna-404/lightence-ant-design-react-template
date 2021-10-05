import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../../../../../ProfileForm/ProfileForm.styles';
import { CardData } from '../../PaymentCardModal';

export const ExpDateItem: React.FC<CardData> = ({ disabled, handleInputChange, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="expiry"
      label={t('profile.nav.payments.expDate')}
      requiredMark="optional"
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <Input name="expiry" onChange={handleInputChange} onFocus={handleInputFocus} disabled={disabled} />
    </FormItem>
  );
};