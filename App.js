import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useReducer } from 'react';


const reducer = (state, action) =>{
  switch(action.tipo){
    case 'setText':
      return({...state,texto:action.payload})
    case 'setNomeCompleto':
      return({...state,nomeUsuario:action.payload})
    case 'setIdade':
      return({...state,idadeUsuario:action.payload})
    case 'setCargo':
      return({...state,cargoUsuario:action.payload})
    default:
      return state
  }
} 

const valorInicial = {
  texto: '',
  nomeUsuario: '',
  idadeUsuario: '',
  cargoUsuario: '',
}

export default function App() {

  let textoDigitado;
  let nomeCompleto;
  let idade;
  let cargo;

  const[state, dispatch] = useReducer(reducer,valorInicial)

  return (
    <View style={styles.container}>
      <Text>UseReducer</Text>
      <Text>{state.texto}</Text> 
      <Text>{state.nomeUsuario}</Text> 
      <Text>{state.idadeUsuario}</Text> 
      <Text>{state.cargoUsuario}</Text> 
      
      <TextInput 
        style = {styles.input}
        onChangeText={(texto) => textoDigitado = texto}
      />

      <TextInput
        style = {styles.input}
        onChangeText={(nomeUsuario) => nomeCompleto = nomeUsuario}
      />

      <TextInput
        style = {styles.input}
        onChangeText={(idadeUsuario) => idade = idadeUsuario}
      />

      <TextInput
        style = {styles.input}
        onChangeText={(cargoUsuario) => cargo = cargoUsuario}
      />

      <Button title='Alterar Texto'
        onPress={() => dispatch({tipo: 'setText', payload: textoDigitado})}
      />

      <Button title='Nome Completo' 
        onPress={() => dispatch({tipo: 'setNomeCompleto', payload: nomeCompleto})}
      />

      <Button title='Idade' 
        onPress={() => dispatch({tipo: 'setIdade', payload: idade})}
      />

      <Button title='Cargo' 
        onPress={() => dispatch({tipo: 'setCargo', payload: cargo})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15
  },
});
