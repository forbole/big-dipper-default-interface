import React from 'react';
import { useTranslation } from 'i18n';
import {
  DialogTitle, Dialog, DialogContent,
} from '@material-ui/core';
import { DonateDialogueProps } from './types';
import { useGetStyles } from './styles';

const DonateDialogue = (props: DonateDialogueProps) => {
  const {
    open,
    handleClose,
  } = props;
  const { t } = useTranslation(['footer']);
  const { classes } = useGetStyles();

  return (
    <Dialog onClose={handleClose} open={open} className={classes.root}>
      <DialogTitle id="simple-dialog-title">{t('donation')}</DialogTitle>
      <DialogContent>
        <p>{t('donationContent')}</p>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialogue;
