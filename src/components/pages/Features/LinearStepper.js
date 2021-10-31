import React, { useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useForm, FormProvider, useFormContext, Controller} from "react-hook-form"
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Business Details",
    "Campanign Details",
    "Target & budget",
    "Delivery & Payment",
  ];
};
  const BusinessDetails = () => {
    const {control} = useFormContext();
    return(
      <>
<h4>Fill the form in the below</h4>
<Controller 
control={control}
name="business"
 render={({field}) => (

 
          <TextField
            id="business"
            label="BUSINESS NAME"
            variant="outlined"
            placeholder="Enter Your Business Name"
            fullWidth
            margin="normal"
           {...field}
          />
 )}
 />
 <Controller 
control={control}
name="website"
 render={({field}) => (

          <TextField
            id="website"
            label="WEBSITE"
            variant="outlined"
            placeholder="Enter Website"
            fullWidth
            margin="normal"
            {...field}
          />
 )}
 />
  <Controller 
control={control}
name="location"
 render={({field}) => (

          <TextField
            id="location"
            label="LOCATION"
            variant="outlined"
            placeholder="Enter Your Location"
            fullWidth
            margin="normal"
            {...field}
          />
 )}
 />
          <Controller 
          control={control}
          name="phonenumber"
           render={({field}) => (
          
           <TextField
            id="phone-number"
            label="PHONE NUMBER"
            variant="outlined"
            placeholder="Enter Your phone number"
            fullWidth
            margin="normal"
            {...field}
            />
           )}
           />
          <Controller 
          control={control}
          name="businesscatagory"
           render={({field}) => (
          
           <TextField
            id="business-category"
            label="BUSINESS CATEGORY"
            variant="outlined"
            placeholder="Enter Your Business category"
            fullWidth
            margin="normal"
            {...field}
          />
           )}
           />
</>
    )
  };
  const CampanignDetails = () => {
    const {control} = useFormContext();
    return(
      <>
      <h1>Let's Talk About Your Campanign</h1>
      <h5>Fill-in the form below</h5>
      <Controller 
control={control}
name="campaignname"
 render={({field}) => (

        <TextField
          id="campaign name"
          label="COMPAIGN NAME"
          variant="outlined"
          placeholder="Enter Your campaign name"
          fullWidth
          margin="normal"
          {...field}
          />
         )}
         />
        <Controller 
        control={control}
        name="startdate"
         render={({field}) => (
        
        <TextField
          id="start-date"
          label="CAMPAIGN START DATE"
          variant="outlined"
          placeholder="Enter Your start date"
          fullWidth
          margin="normal"
          {...field}
          />
         )}
         />
        <Controller 
        control={control}
        name="endDate"
         render={({field}) => (
        
        <TextField
          id="end-date"
          label="CAMPAIGN END DATE"
          variant="outlined"
          placeholder="Enter Your end date"
          fullWidth
          margin="normal"
          {...field}
          />
         )}
         />
        <Controller 
        control={control}
        name="clientsname"
         render={({field}) => (
        
         <TextField
          id="clients-name"
          label="ENTER 5 POTENTIAL CLIENTS(NAME OR WEBSITE)"
          variant="outlined"
          placeholder="Enter Your clients name"
          fullWidth
          margin="normal"
          {...field}
          />
         )}
         />
      </>
    )
  };
  const TargetBudget = () => {
    const {control} = useFormContext();
    return(
      <>
       <Controller 
control={control}
name="address1"
 render={({field}) => (

      <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
            />
           )}
           />
          <Controller 
          control={control}
          name="address2"
           render={({field}) => (
          
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
            />
           )}
           />
          <Controller 
          control={control}
          name="country"
           render={({field}) => (
          
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
            />
           )}
           />
            </>
    )
  };
  const DeliveryPayment = () => {
    const {control} = useFormContext();
    return(
      <>
      <h1>just a few more details,before you are live</h1>
      <h5>Fill-in the form below.you will be charged at the end of the day</h5>
      <Controller 
control={control}
name="cardnumber"
 render={({field}) => (

        <TextField
          id="cardnumber"
          label="Card Number"
          variant="outlined"
          placeholder="Enter Your Card Number"
          fullWidth
          margin="normal"
          {...field}
          />
         )}
         />
        <Controller 
        control={control}
        name="cardMonth"
         render={({field}) => (
        
        <TextField
          id="cardMonth"
          label="Card Month"
          variant="outlined"
          placeholder="Enter Your Card Month"
          fullWidth
          margin="normal"
          {...field}
          />
         )}
         />
        <Controller 
        control={control}
        name="cardYear"
         render={({ field} ) => (
        
        <TextField
          id="cardYear"
          label="Card Year"
          variant="outlined"
          placeholder="Enter Your Card Year"
          fullWidth
          margin="normal"
          {...field}
            />
           )}
           />
      </>
    )
  };


function getStepContent(step) {
  switch (step) {
    case 0:
      return <BusinessDetails/>
       
       case 1:
      return <CampanignDetails/>
    case 2:
      return <TargetBudget />
    case 3:
      return <DeliveryPayment/>
    
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods= useForm({

  defaultValues:{
     business: "",
   website:   "",
    location:  "",
   businesscatagory: "",
    phonenumber: "",
    campaignname: "",
    startdate: "",
    endDate: "",
    clientname: "",
    address1: "",
    address2: "",
    country: "",
    cardnumber: "",
    cardMonth: "",
    cardYear: ""
  
},
});

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  const onSubmit = (data) =>{
    console.log (data);
  }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          congraulations
        </Typography>
      ) : (
        <>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{getStepContent(activeStep)}
        
        <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
           previous
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
            type="submit"
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </form>
        </FormProvider>
          
        </>
      )}
    </div>
  )
};

export default LinearStepper;