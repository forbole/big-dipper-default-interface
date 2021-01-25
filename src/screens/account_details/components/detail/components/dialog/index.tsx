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
import { InfoDialog } from 'big-dipper-default-ui';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
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
        display: address,
        rawValue: '11111',
      }}
      copyCallback={handleCopy}
      qrCode={(
        <QRCode
          value={address}
          size={192}
          bgColor="#ffffff"
          fgColor="#000000"
          renderAs="svg"
        />
      )}
      socialMedia={(
        <div>
          {t('shareTo')}
          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <FacebookShareButton
              url={`https://cosmos.bigdipper.live/account/${address}`}
              quote={address}
              hashtag="#forbole"
              className={classnames('buttonDisplay')}
            >
              <FacebookIcon
                size={36}
                round
              />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://cosmos.bigdipper.live/account/${address}`}
              title={address}
              hashtags={['#forbole']}
              className={classnames('buttonDisplay')}
            >
              <TwitterIcon
                size={36}
                round
              />
            </TwitterShareButton>

            <TelegramShareButton
              url={`https://cosmos.bigdipper.live/account/${address}`}
              title={address}
              className={classnames('buttonDisplay')}
            >
              <TelegramIcon
                size={36}
                round
              />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`https://cosmos.bigdipper.live/account/${address}`}
              title={address}
              separator=":: "
              className={classnames('buttonDisplay')}
            >
              <WhatsappIcon
                size={36}
                round
              />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://cosmos.bigdipper.live/account/${address}`}
              subject="address"
              body={address}
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
