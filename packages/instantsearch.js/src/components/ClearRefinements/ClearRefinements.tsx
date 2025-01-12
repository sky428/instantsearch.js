/** @jsx h */

import { h } from 'preact';
import { cx } from '@algolia/ui-components-shared';
import Template from '../Template/Template';
import type { ClearRefinementsRenderState } from '../../connectors/clear-refinements/connectClearRefinements';
import type {
  ClearRefinementsCSSClasses,
  ClearRefinementsTemplates,
} from '../../widgets/clear-refinements/clear-refinements';
import type { ComponentCSSClasses } from '../../types';
import type { PreparedTemplateProps } from '../../lib/templating';

export type ClearRefinementsComponentCSSClasses =
  ComponentCSSClasses<ClearRefinementsCSSClasses>;

export type ClearRefinementsComponentTemplates =
  Required<ClearRefinementsTemplates>;

export type ClearRefinementsProps = {
  refine: ClearRefinementsRenderState['refine'];
  cssClasses: ClearRefinementsComponentCSSClasses;
  hasRefinements: ClearRefinementsRenderState['hasRefinements'];
  templateProps: PreparedTemplateProps<ClearRefinementsComponentTemplates>;
};

const ClearRefinements = ({
  hasRefinements,
  refine,
  cssClasses,
  templateProps,
}: ClearRefinementsProps) => (
  <div className={cssClasses.root}>
    <Template
      {...templateProps}
      templateKey="resetLabel"
      rootTagName="button"
      rootProps={{
        className: cx(
          cssClasses.button,
          !hasRefinements && cssClasses.disabledButton
        ),
        onClick: refine,
        disabled: !hasRefinements,
      }}
      data={{ hasRefinements }}
    />
  </div>
);

export default ClearRefinements;
