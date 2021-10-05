import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';

export const CurrentPasswordItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="password"
      requiredMark="optional"
      label={t('profile.nav.securitySettings.currentPassword')}
      rules={[
        {
          required: true,
          message: t('profile.nav.securitySettings.requiredPassword'),
        },
      ]}
    >
      <Input.Password />
    </FormItem>
  );
};