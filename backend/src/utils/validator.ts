import validator from 'validator';

interface ValidationData {
  firstName: string;
  emailId: string;
  password: string;
  [key: string]: any;
}

const validate = (data: ValidationData): void => {
  // 1. Check field existence
  const mandatoryFields = ['firstName', 'emailId', 'password'];
  const missingFields = mandatoryFields.filter(field => !(field in data));
  
  if (missingFields.length > 0) {
    throw new Error(`Missing fields: ${missingFields.join(', ')}`); // Specific fields
  }

  // 2. Validate email
  if (!validator.isEmail(data.emailId)) {
    throw new Error(`Invalid email: ${data.emailId}`);
  }

  // 3. Validate password with custom rules
  if (!validator.isStrongPassword(data.password, {
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minUppercase: 0,
    minSymbols: 0
  })) {
    throw new Error('Password must be 8+ chars with at least 1 letter and 1 number');
  }
};

export default validate;
