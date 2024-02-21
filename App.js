
import React, { useState } from 'react';
import {View } from 'react-native';
import ConnectionForm from './connectioncommponents/connection';
import SavedConnections from './connectioncommponents/saveconnection';

const App = () => {
  const [savedConnections, setSavedConnections] = useState([]);

  const handleSaveConnection = (method, number) => {
    setSavedConnections((prevConnections) => [
      ...prevConnections,
      { method, number, id: Date.now() },
    ]);
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff'}}>
      <ConnectionForm onSaveConnection={handleSaveConnection} />
      <SavedConnections savedConnections={savedConnections} />
    </View>
  );
};

export default App;