const { describe, it } = intern.getInterface('bdd');

import { v, w } from '@dojo/widget-core/d';
import harness from '@dojo/test-extras/harness';
import Banner from '../../../src/widgets/Banner';

import * as css from '../../../src/styles/banner.m.css';

describe('Banner', () => {
	it('should render', () => {
		const h = harness(() => w(Banner, {}));
		h.expect(() => v('h1', {
			title: 'I am a title!',
			classes: css.root
		}, [ 'Biz-E-Bodies' ]));
	});
});
