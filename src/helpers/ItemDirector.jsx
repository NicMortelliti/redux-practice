import DisplayChecklistItemButton from '../components/DisplayChecklistItemButton';
import DisplayConditionalButton from '../components/DisplayConditionalButton';
import DisplayConditionalParent from '../components/DisplayConditionalParent';
import DisplayIndexButton from '../components/DisplayIndexButton';
import DisplaySubIndexButton from '../components/DisplaySubIndexButton';
import { useSelector } from 'react-redux';

const ItemDirector = ({ id, parentId }) => {
  const { data } = useSelector((state) => state.ecl);

  // Get the complete object that matches this id
  const obj = data.find((eachItem) => eachItem.id === id);

  switch (obj.type) {
    case 'index':
      return <DisplayIndexButton obj={obj} />;

    case 'sub-index':
      return <DisplaySubIndexButton obj={obj} />;

    case 'checklist':
      return <DisplayChecklistItemButton obj={obj} />;

    case 'conditional_parent':
    case 'msli_parent':
      return <DisplayConditionalParent obj={obj} />;

    case 'conditional_child':
    case 'msli_child':
      return <DisplayConditionalButton obj={obj} parentId={parentId} />;

    default:
      break;
  }
};

export default ItemDirector;
