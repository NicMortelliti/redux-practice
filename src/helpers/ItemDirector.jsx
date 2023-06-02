import DisplayChecklistItem from '../components/DisplayChecklistItem';
import DisplayConditionals from '../components/DisplayConditionals';
import getObjectById from './getObjectById';
import DisplayConditionalParent from '../components/DisplayConditionalParent';
import DisplayIndexButton from '../components/DisplayIndexButton';

const ItemDirector = ({ id }) => {
  console.log(`Director: ${id}`);

  // Go get the complete object that matches this id
  const obj = getObjectById(id);

  switch (obj.type) {
    case 'index':
      return <DisplayIndexButton obj={obj} />;

    case 'checklist':
      return <DisplayChecklistItem obj={obj} />;

    case 'conditional_parent':
      return <DisplayConditionalParent obj={obj} />;

    case 'conditional_child':
      return <DisplayConditionals obj={obj} />;

    default:
      break;
  }
};

export default ItemDirector;
