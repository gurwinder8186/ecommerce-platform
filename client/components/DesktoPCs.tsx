import { useFetchDesktopPCs } from '../hooks/useCategories';

function DesktopPCs() {
  const { data: desktopPCs, isLoading, isError } = useFetchDesktopPCs(1); 
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading desktop PCs.</p>;

  return (
    <div>
      <h3>Desktop PCs</h3>
      <ul>
        {desktopPCs?.map((pc) => (
          <li key={pc.id}>
            <h4>{pc.name}</h4>
            <p>{pc.description}</p>
            <p>Price: ${pc.price.toFixed(2)}</p>
            <img src={pc.imageUrl} alt={pc.name} width="200" />
            <ul>
              <li>Processor: {pc.specifications.processor}</li>
              <li>RAM: {pc.specifications.ram}</li>
              <li>Storage: {pc.specifications.storage}</li>
              {pc.specifications.gpu && <li>GPU: {pc.specifications.gpu}</li>}
              <li>OS: {pc.specifications.os}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopPCs;
