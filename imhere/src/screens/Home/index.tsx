import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você Removeu ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          // keyboardType="numeric" // altera o tipo de teclado, apenas números, apenas texto e outros tipos
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
      <Participant
        name={"Jhonanthan Campos Xavier"}
        onRemove={() => handleParticipantRemove("Jhonanthan")}
      />
    </View>
  );
}
