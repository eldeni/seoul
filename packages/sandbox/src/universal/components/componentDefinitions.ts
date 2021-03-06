import BadgedPage from '@@universal/components/pages/componentPages/BadgedPage';
import ButtonPage from '@@universal/components/pages/componentPages/ButtonPage';
import GridPage from '@@universal/components/pages/componentPages/GridPage';
import ImagePage from '@@universal/components/pages/componentPages/ImagePage';
import InputPage from '@@universal/components/pages/componentPages/InputPage';
import TablePage from '@@universal/components/pages/componentPages/TablePage';
import TextPage from '@@universal/components/pages/componentPages/TextPage';
import SpinnerPage from '@@universal/components/pages/componentPages/SpinnerPage';

const componentDefinitions: ComponentDefinition[] = [
  {
    components: [
      {
        component: BadgedPage,
        name: 'badged',
      },
      {
        component: ButtonPage,
        name: 'button',
      },
      {
        component: GridPage,
        name: 'grid',
      },
      {
        component: TextPage,
        name: 'text',
      },
      {
        component: ImagePage,
        name: 'image',
      },
      {
        component: InputPage,
        name: 'input',
      },
      {
        component: TablePage,
        name: 'table',
      },
      {
        component: SpinnerPage,
        name: 'spinner',
      },
    ],
    label: 'default',
  },
];

export default componentDefinitions;

export interface ComponentDefinition {
  components: {
    component: React.FC<any>;
    name: string;
  }[];
  label: string;
}
