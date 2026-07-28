Codigo original

const handleLogin = () => {
  login(email, password);
  router.replace("/home");
};

<Text style={styles.label}>Correo electrónico</Text>
<TextInput
  style={styles.inputContainer}
  placeholder="Correo electrónico"
  placeholderTextColor="#777"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>
