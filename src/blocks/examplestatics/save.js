import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
const { AnimationRenderProps } = gspblib.collections;

function save({ attributes }) {
	const {
		labelDay, labelHour, labelMin, labelSec, id, endtime, animation, inlineCssStyles,
	} = attributes;

	let addonId = `gspb_id-${id}`;
	//Render Animation Properties
	let AnimationProps = {};
	AnimationProps = AnimationRenderProps(animation);

	const blockProps = useBlockProps.save({
		className: `gspb-addonwrap ${addonId}`
	});

	return (
		<>
			<div {...blockProps}>
				<div className="gspbaddondiv" {...AnimationProps}>

				</div>
			</div>
		</>
	);
}

export default save;