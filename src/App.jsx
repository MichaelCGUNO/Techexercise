const student = {
  name: "Michael",
  project: "Tech Exercise",
  framework: "React with Vite",
};

function App() {
  return (
    <main>
      <h1>Tech Exercise Application</h1>
      <h2>ME!!!!!</h2>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Project:</strong> {student.project}
      </p>

      <p>
        <strong>Framework:</strong> {student.framework}
      </p>
    </main>
  );
}

export default App;