import React, {useState} from 'react';
import isCloudflare from '@authentication/cloudflare-ip';
import MainPage from './plasmic/MainPage';
import Input from './plasmic/Input';
import ValidationResultIcon from './plasmic/ValidationResultIcon';

function getStatus(value: string) {
  try {
    return isCloudflare(value) ? 'valid' : 'invalid';
  } catch (ex) {
    return undefined;
  }
}

function App() {
  const [value, setValue] = useState('');
  return (
    <MainPage
      input={
        <Input
          placeholder="e.g. 103.21.244.0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      }
      validationResult={<ValidationResultIcon status={getStatus(value)} />}
    />
  );
}

export default App;
