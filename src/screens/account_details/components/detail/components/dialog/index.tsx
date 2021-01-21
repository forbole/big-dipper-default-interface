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
import {
  InfoDialog,
} from 'big-dipper-default-ui';
import {
  FileCopyOutlined,
  Facebook,
  Twitter,
  Telegram,
  WhatsApp,
  Email,
} from '@material-ui/icons';
import classnames from 'classnames';
import { useGetStyles } from './styles';

export interface DialogProp {
  address: string,
}
const Dialog = (prop: DialogProp) => {
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles();

  return (
    <InfoDialog
      title="scan for address"
      buttonDisplay="Copy Address"
      address={prop.address}
      qrCode={(
        <QRCode
          value={prop.address}
          size={192}
          bgColor="#ffffff"
          fgColor="#000000"
          renderAs="svg"
        />
      )}
      socialMedia={(
        <div>
          Share to ...
          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <FacebookShareButton
              url={`https://cosmos.bigdipper.live/account/${prop.address}`}
              quote={prop.address}
              hashtag="#forbole"
            >
              <FacebookIcon size={36} />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://cosmos.bigdipper.live/account/${prop.address}`}
              title={prop.address}
              hashtags={['#forbole']}
            >
              <TwitterIcon size={36} />
            </TwitterShareButton>

            <TelegramShareButton
              url={`https://cosmos.bigdipper.live/account/${prop.address}`}
              title={prop.address}
            >
              <TelegramIcon size={36} />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`https://cosmos.bigdipper.live/account/${prop.address}`}
              title={prop.address}
              separator=":: "
            >
              <WhatsappIcon size={36} />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://cosmos.bigdipper.live/account/${prop.address}`}
              subject="address"
              body={prop.address}
              separator=":: "
            >
              <EmailIcon size={36} />
            </EmailShareButton>
          </div>
        </div>
      )}
    />
  );
};

export default Dialog;
