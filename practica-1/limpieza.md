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

Smells encontrados

- Magic Strings: Hay textos escritos directamente en el código, como `"Correo electrónico"` y `"/home"`.
- Valores hardcodeados: El color `"#777"` está definido directamente en el código, lo que dificulta cambiarlo en el futuro.
- Falta de validación: La función `handleLogin()` redirige al usuario sin verificar si el inicio de sesión fue exitoso.

Codigo Refactorizado

const HOME_ROUTE = "/home";
const EMAIL_PLACEHOLDER = "Correo electrónico";
const PLACEHOLDER_COLOR = "#777";

const handleLogin = async () => {
  const success = await login(email, password);

  if (success) {
    router.replace(HOME_ROUTE);
  }
};

<Text style={styles.label}>{EMAIL_PLACEHOLDER}</Text>
<TextInput
  style={styles.inputContainer}
  placeholder={EMAIL_PLACEHOLDER}
  placeholderTextColor={PLACEHOLDER_COLOR}
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>
