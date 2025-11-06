import ColorBoxes from './ColorBoxes'

export default function ColorBoxGrid({ colors }){
        // Render a simple grid of 6 ColorBoxes. ColorBoxes expects a `colors` prop (array)
        const boxes = Array.from({ length: 25 }).map((_, i) => (
                <ColorBoxes key={i} colors={colors} />
        ));

        return (
                <div style={{ display: 'grid', gap: '0px', gridTemplateColumns: 'repeat(5, auto)' }}>
                        {boxes}
                </div>
        )
}