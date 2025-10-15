import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const API =
  "https://68ee6d24df2025af7803a56c.mockapi.io/22003395/TranDinhHoan/data";

export default function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [job, setJob] = useState("");
  const [search, setSearch] = useState("");

  const loadTasks = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTasks(data);
    } catch (e) {
      console.log("Lỗi load dữ liệu:", e);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!job.trim()) return alert("⚠️ Hãy nhập công việc!");
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: job,
        dont: false,
        image: "https://i.pravatar.cc/150?img=" + Math.floor(Math.random() * 70),
      }),
    });
    setJob("");
    setStep(2);
    loadTasks();
  };

  const toggleDone = async (item: any) => {
    await fetch(`${API}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dont: !item.dont }),
    });
    loadTasks();
  };

  const filtered = tasks.filter((t:any) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );
  if (step === 1)
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>MANAGE YOUR TASK</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              name.trim() ? setStep(2) : alert("⚠️ Vui lòng nhập tên!")
            }
          >
            <Text style={styles.btnText}>GET STARTED →</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    );

  if (step === 2)
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Hi {name},</Text>
          <Text style={styles.sub}>Have a great day ahead ☀️</Text>

          <TextInput
            style={styles.search}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
          />

          <FlatList
            data={filtered}
            keyExtractor={(item : any) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.task,
                  item.dont && { backgroundColor: "#d1f7c4" },
                ]}
                onPress={() => toggleDone(item)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                />
                <Text
                  style={{
                    textDecorationLine: item.dont ? "line-through" : "none",
                    flex: 1,
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: "#888" }}>-</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity style={styles.addBtn} onPress={() => setStep(3)}>
            <Text style={{ fontSize: 28, color: "white" }}>＋</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>ADD YOUR JOB</Text>
        <TextInput
          style={styles.input}
          placeholder="Input your job"
          value={job}
          onChangeText={setJob}
        />
        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Text style={styles.btnText}>FINISH →</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/562/562678.png",
          }}
          style={{ width: 100, height: 100, marginTop: 30 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fdfdfd",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7e22ce",
    marginBottom: 20,
  },
  header: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  sub: { color: "#666", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#06b6d4",
    padding: 12,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  btnText: { color: "white", fontWeight: "bold" },
  search: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: "90%",
    elevation: 1,
  },
  addBtn: {
    backgroundColor: "#06b6d4",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    right: 30,
  },
});
