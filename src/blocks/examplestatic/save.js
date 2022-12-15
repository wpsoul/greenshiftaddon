import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
const { AnimationRenderProps } = gspblib.collections;
const { IconViewer } = gspblib.components;

function save(props) {
	const {
		customcolor, id, animation, enableicon
	} = props.attributes;

	const {className} = props;

	let blockId = `gspb_id-${id}`;
	let blockClassName = `gspb-examplebox ${blockId} ${className}`;

	//Render Animation Properties
	let AnimationProps = {};
	AnimationProps = AnimationRenderProps(animation);

	return (
		<>
			<div 					
				id={blockId}
				className={blockClassName} {...AnimationProps}
			>
				<span className="gspb_example_value">{customcolor}</span>
				{enableicon &&
					<span className="gspb_example_icon">
						<IconViewer attributeName="iconBox_icon" size={16} color={"#565D66"} {...props} />
					</span>
				}
			</div>
		</>
	);
}

export default save;