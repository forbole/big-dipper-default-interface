import React from 'react';
import QRCode from 'qrcode.react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { useTranslation } from 'i18n';
import { InfoDialog } from '@forbole/big-dipper-default-ui';
import classnames from 'classnames';
import { DialogProp } from './types';
import { useGetStyles } from './styles';
import { useDialogHook } from './hooks';

const Dialog = (props: DialogProp) => {
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles();
  const { handleCopy } = useDialogHook(t);
  const { address } = props;

  return (
    <InfoDialog
      className={classnames(classes.root, 'dialog')}
      title={t('scanAddress')}
      buttonDisplay={t('buttonDisplay')}
      address={{
        display: address.display,
        rawValue: address.rawValue,
      }}
      copyCallback={handleCopy}
      qrCode={(
        <QRCode
          value={address.rawValue}
          size={192}
          bgColor="#ffffff"
          fgColor="#000000"
          renderAs="svg"
        />
      )}
      socialMedia={(
        <div className={classnames('socialMediaContainer')}>
          {t('shareTo')}
          <div
            className={classnames('socialMediaContent')}
          >
            <FacebookShareButton
              url={`https://cosmos.bigdipper.live/account/${address.rawValue}`}
              quote={address.rawValue}
              hashtag="#forbole"
              className={classnames('buttonDisplay')}
            >
              <FacebookIcon
                size={36}
                round
              />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://cosmos.bigdipper.live/account/${address.rawValue}`}
              title={address.rawValue}
              hashtags={['#forbole']}
              className={classnames('buttonDisplay')}
            >
              <TwitterIcon
                size={36}
                round
              />
            </TwitterShareButton>

            <TelegramShareButton
              url={`https://cosmos.bigdipper.live/account/${address.rawValue}`}
              title={address.rawValue}
              className={classnames('buttonDisplay')}
            >
              <TelegramIcon
                size={36}
                round
              />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`https://cosmos.bigdipper.live/account/${address.rawValue}`}
              title={address.rawValue}
              separator=":: "
              className={classnames('buttonDisplay')}
            >
              <WhatsappIcon
                size={36}
                round
              />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://cosmos.bigdipper.live/account/${address.rawValue}`}
              subject="address"
              body={address.rawValue}
              separator=":: "
              className={classnames('buttonDisplay')}
            >
              <EmailIcon
                size={36}
                round
              />
            </EmailShareButton>
          </div>
        </div>
      )}
    />
  );
};

export default Dialog;
