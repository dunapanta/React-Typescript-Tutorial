
import { useForm } from '../hooks/useForm';

export default function Formularios() {
const { formulario, email, password, onChangeFor } = useForm({
    email: "test@test.com",
    password: "123456",
  })
  return (
    <>
      <h3>Formularios</h3>
      <input
        placeholder="Email"
        type="text"
        value={email}
        className="form-control"
        onChange={({ target }) => onChangeFor(target.value, "email")}
      />
      <input
        placeholder="Password"
        type="text"
        value={password}
        className="form-control mt-2 mb-2"
        onChange={({ target }) => onChangeFor(target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
}
