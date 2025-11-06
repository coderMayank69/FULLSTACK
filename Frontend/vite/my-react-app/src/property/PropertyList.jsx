import Property from './property'
import './PropertyList.css'

export default function PropertyList({ data }) {
    return (
        <div className="PropertyList">
            {data.map((p) => (
                <Property key={p.id} {...p} />
            ))}
        </div >
    );
}