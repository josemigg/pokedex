import { useParams } from "react-router-dom";
import { MY_PROJECTS } from "./projects";

export default () => {
  const { projectId } = useParams();
  const projectInfo = MY_PROJECTS[projectId];
  return (
    <div>
      {!projectInfo ? (
        <div>
          Aún no he desarrollado este projecto pero puedes sugerirme la idea a
          través de mi formulario de contacto
        </div>
      ) : (
        <div>name: {projectInfo.name}</div>
      )}
    </div>
  );
};
