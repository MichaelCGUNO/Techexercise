const student = {
  name: "Michael",
  project: "Tech Exercise",
  framework: "React with Vite",
};

function App() {
  return (
    <main>
      <h1>Tech Exercise Application</h1>
      <h2>Framework installation successful!</h2>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Project:</strong> {student.project}
      </p>

      <p>
        <strong>Framework:</strong> {student.framework}
      </p>

      <p>
        <strong>Status:</strong> {student.status}
      </p>
    </main>
  );
}

export default App;