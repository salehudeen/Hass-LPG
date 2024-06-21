import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HassFuelCardApplication = () => {
  const [step, setStep] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [telephone, setTelephone] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [carType, setCarType] = useState('');
  const [carModel, setCarModel] = useState('');
  const [prepaidLimit, setPrepaidLimit] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progressStep, step >= 1 && styles.activeStep]} />
        <View style={[styles.progressStep, step >= 2 && styles.activeStep]} />
        <View style={[styles.progressStep, step >= 3 && styles.activeStep]} />
        <View style={[styles.progressStep, step >= 4 && styles.activeStep]} />
      </View>

      {step === 1 && (
        <View style={styles.stepContainer}>
          <Text style={styles.heading}>Personal Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Customer Name"
            value={customerName}
            onChangeText={setCustomerName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 2 && (
        <View style={styles.stepContainer}>
          <Text style={styles.heading}>Vehicle Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Vehicle Registration No"
            value={vehicleRegistration}
            onChangeText={setVehicleRegistration}
          />
          <TextInput
            style={styles.input}
            placeholder="Fuel Type"
            value={fuelType}
            onChangeText={setFuelType}
          />
          <TextInput
            style={styles.input}
            placeholder="Car Type"
            value={carType}
            onChangeText={setCarType}
          />
          <TextInput
            style={styles.input}
            placeholder="Car Model"
            value={carModel}
            onChangeText={setCarModel}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {step === 3 && (
        <View style={styles.stepContainer}>
          <Text style={styles.heading}>Additional Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Passport/ID No"
            value={idNumber}
            onChangeText={setIdNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Telephone"
            value={telephone}
            onChangeText={setTelephone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Prepaid Limit Requested (KES)"
            value={prepaidLimit}
            onChangeText={setPrepaidLimit}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
              <Text style={styles.previousButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {step === 4 && (
        <View style={styles.stepContainer}>
          <Text style={styles.heading}>Terms and Conditions</Text>
          <TouchableOpacity style={styles.termsButton}>
            <Text style={styles.termsButtonText}>View Terms and Conditions</Text>
            <Ionicons name="chevron-forward" size={18} color="#333" />
          </TouchableOpacity>
          <View style={styles.termsCheckbox}>
            <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
              <Ionicons
                name={termsAccepted ? 'checkbox' : 'square-outline'}
                size={24}
                color={termsAccepted ? '#2196F3' : '#ccc'}
              />
            </TouchableOpacity>
            <Text style={styles.termsCheckboxText}>
              I accept the terms and conditions
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.submitButton, !termsAccepted && styles.disabledButton]}
            onPress={termsAccepted ? handleSubmit : null}
            disabled={!termsAccepted}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
            <Text style={styles.previousButtonText}>Previous</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  progressStep: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeStep: {
    backgroundColor: '#2196F3',
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: '#06045E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  previousButton: {
    backgroundColor: '#ccc',
    paddingVertical:12,
    paddingHorizontal: 24,
    borderRadius: 4,
    },
    previousButtonText: {
    color: '#333',
    fontWeight: 'bold',
    },
    termsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    },
    termsButtonText: {
    color: '#333',
    marginRight: 8,
    },
    termsCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    color:'#06045E'
    },
    termsCheckboxText: {
    marginLeft: 8,
    color: '#333',
    },
    submitButton: {
    backgroundColor: '#06045E',
    paddingVertical: 12,
    marginBottom:10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    },
    disabledButton: {
    backgroundColor: '#ccc',
    },
    submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    },
    });
    export default HassFuelCardApplication;