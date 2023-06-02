import DisplayChecklistItem from '../components/DisplayChecklistItem';
import DisplayConditionals from '../components/DisplayConditionals';
import getObjectById from './getObjectById';
import DisplayConditionalParent from '../components/DisplayConditionalParent';
import DisplayIndexButton from '../components/DisplayIndexButton';
import DisplaySubIndexButton from '../components/DisplaySubIndexButton';

const ItemDirector = ({ id }) => {
  // Go get the complete object that matches this id
  const obj = getObjectById(id);
  console.log(`Director: ${id} - ${obj.type}`);

  switch (obj.type) {
    case 'index':
      return <DisplayIndexButton obj={obj} />;

    case 'sub-index':
      return <DisplaySubIndexButton obj={obj} />;

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
