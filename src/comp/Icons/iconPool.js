//importerar css fil
import "./Icons.css";
//nedan hämtas ikonen från glitch där vi valt att "hosta" våra bilder. Positionering och styling görs dels i inline styling och i css filen
function IconPool() {
  return (
    <div className="iconBoxInline">
      <div className="iconBox">
        <img
          style={{ width: "18px", height: "18px", color: "white" }}
          src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/person-swimming-solid.svg?v=1664459652629"
          alt="Ikon på en person som simmar"
        />
      </div>
    </div>
  );
}

export default IconPool;
