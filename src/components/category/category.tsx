import React, { MouseEvent, useRef } from 'react';
import * as styles from './category.module.scss';

type CategoryProps = {
  categories: string[];
  selectedCategory: string;
  setCategory: (category: string) => void;
};

const Category = ({ categories, selectedCategory, setCategory }: CategoryProps) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const changeScrollLeft = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const { target } = event;
    const { current } = containerEl;
    if (current) {
      const { offsetWidth: containerWidth } = current;
      const { offsetLeft: categoryLeft, offsetWidth: categoryWidth } = target as HTMLButtonElement;
      const centerScrollX = categoryLeft + categoryWidth / 2 - containerWidth / 2;
      current.scroll({ left: centerScrollX >= 0 ? centerScrollX : 0 });
    }
  };
  const onClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, category: string) => {
    changeScrollLeft(event);
    setCategory(category);
  };
  const renderCategories = () =>
    ['ALL', ...categories].map(category => (
      <li key={category} className={styles.line}>
        <button
          type="button"
          className={selectedCategory === category ? `${styles.btn_category} ${styles.selected}` : styles.btn_category}
          onClick={e => {
            onClick(e, category);
          }}>
          {category.toUpperCase()}
        </button>
      </li>
    ));
  return (
    <div className={styles.container} ref={containerEl}>
      <ul className={styles.tabs}>{renderCategories()}</ul>
    </div>
  );
};

export { Category };
