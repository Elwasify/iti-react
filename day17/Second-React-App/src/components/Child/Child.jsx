export default function Child({ skill, onRemove }) {
  return (
    <span className="skill-badge">
      {skill}
      <button
        type="button"
        className="btn-close"
        aria-label={`Remove ${skill}`}
        onClick={() => onRemove(skill)}
      />
    </span>
  );
}
