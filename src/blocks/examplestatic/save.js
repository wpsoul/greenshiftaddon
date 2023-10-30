import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
const { AnimationRenderProps } = gspblib.collections;
const { IconViewer } = gspblib.components;
const {
    getDataAttributesfromDynamic
} = gspblib.utilities;

function save(props) {
	const {
		customcolor, id, animation, enableicon, interactionLayers
	} = props.attributes;

	let blockId = `gspb_id-${id}`;
	let blockClassName = `gspb-examplebox ${blockId}`;

	//Render Animation Properties
	let AnimationProps = {};
    AnimationProps = AnimationRenderProps(animation, interactionLayers);

    let DynamicDataAttributes = getDataAttributesfromDynamic(props);
    const blockProps = useBlockProps.save({
        className: blockClassName,
        ...DynamicDataAttributes
    });
    blockProps.id = blockId;

	return (
		<>
			<div 					
				{...blockProps}
				{...AnimationProps}
			>
				<div className="gspb_example_value">{customcolor}</div>
				{enableicon &&
					<div className="gspb_example_icon">
						<IconViewer attributeName="iconBox_icon" size={16} color={"#565D66"} {...props} />
					</div>
				}
			</div>
		</>
	);
}

export default save;