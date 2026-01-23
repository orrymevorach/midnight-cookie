import Pricing from './Pricing/Pricing';
import Information from './Information/Information';
import Form from './Form/Form';
// import ImageGridWithNavigation from 'components/shared/ImageGridWithNavigation/ImageGridWithNavigation';

export default function Catering({
  cateringOptions,
  cateringPricingOptionsData,
}) {
  return (
    <>
      <Information />
      {/* <ImageGridWithNavigation
        data={cateringOptions}
        title="Catering Options"
      /> */}
      <Pricing cateringPricingOptionsData={cateringPricingOptionsData} />
      <Form />
    </>
  );
}
