import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Jhonanthan",
    "Aline",
    "Ronaldo",
    "Leitão",
    "Marcos",
    "Leticia",
    "João",
    "Maria",
    "Ricardo",
    "Fernado",
    "Marilia",
  ];

  const participants2: ArrayLike<any> | null | undefined = [];

  function handleParticipantAdd() {
    if (participants.includes("Jhonanthan")) {
      return Alert.alert(
        "Participante Já Existente",
        "Já existe um participante cadastrado com esse nome"
      );
    }
    console.log("Você clicou no botão adicionar");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o particpante ${name} ?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            {" "}
            Ninguém chegou no evento ainda ? Adicione particpantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
