import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useToast,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';
import qs from 'qs';
import axios from 'axios';

function ReportContact() {
  const toast = useToast();
  const [reportContactName, setReportContactName] = useState('');
  const [reportContactNumber, setReportContactNumber] = useState('');
  const [reason, setReason] = useState('');

  const handleReport = (event) => {
    event.preventDefault();

    console.log(reason, reportContactNumber, reportContactName);
    const reportDetails = qs.stringify({
      'entry.2005620554': reportContactName,
      'entry.1045781291': reportContactNumber,
      'entry.1603243538': reason,
    });

    axios
      .post(
        'https://docs.google.com/forms/d/e/1FAIpQLSeEYlddVHJnDLJ3SxLpUVfqyWiA-8EqN5pln_L03kOfnsl_rg/formResponse',
        reportDetails,
      )
      .then(() => {
        toast({
          title: 'Thanks for reporting the contact. Our team will look into the report.',
          status: 'info',
          duration: 7000,
          isClosable: true,
        });
        setReportContactName('');
        setReportContactNumber('');
        setReason('');
      })
      .catch((err) => {
        toast({
          title: err.response.data?.message || err.message,
          status: 'error',
          variant: 'subtle',
          duration: 10000,
          isClosable: true,
        });
      });
  };

  return (
    <Box m={5}>
      <Heading textAlign="left" as="h3" size="md">
        Report Contact
      </Heading>
      <Text textAlign="left" fontWeight="hairline">
        If you think any GUS contact has acted badly and you want us to
        look into it, kindly submit their phone number here
      </Text>
      <Box maxWidth="80%" borderRadius="md" m={5}>
        <FormControl m={2}>
          <FormLabel>
            <Text fontWeight="semibold">Contact Name</Text>
          </FormLabel>
          <Input
            variant="filled"
            onChange={(e) => setReportContactName(e.target.value)}
            value={reportContactName}
            type="text"
            placeholder="Enter the name of the contact you'd like to report.
"
          />
          {!reportContactName && (
            <FormErrorMessage>Name is required</FormErrorMessage>
          )}
        </FormControl>
        <FormControl m={2}>
          <FormLabel>
            <Text fontWeight="semibold">Contact Number</Text>
          </FormLabel>
          <Input
            variant="filled"
            onChange={(e) => setReportContactNumber(e.target.value)}
            value={reportContactNumber}
            type="tel"
            placeholder="Enter the contact number with zip code."
          />
          {!reportContactNumber && (
            <FormErrorMessage>Number is required</FormErrorMessage>
          )}
        </FormControl>
        <FormControl m={2}>
          <FormLabel>
            <Text fontWeight="semibold">Reason</Text>
          </FormLabel>
          <Textarea
            variant="filled"
            onChange={(e) => setReason(e.target.value)}
            value={reason}
            placeholder="Tell us why you are reporting this contact"
          />
          {!reason && (
            <FormErrorMessage>Reason is needed</FormErrorMessage>
          )}
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          borderRadius="md"
          type="submit"
          onClick={handleReport}
        >
          Report
        </Button>
      </Box>
    </Box>
  );
}

export default ReportContact;
