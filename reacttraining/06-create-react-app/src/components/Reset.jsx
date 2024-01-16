export function Reset({ count, hendleReset }) {
  return (
    <div>
      {count > 0 && (
        <button onClick={hendleReset} style={{ backgroundColor: 'Lightgreen' }}>
          Reset
        </button>
      )}
    </div>
  );
}
