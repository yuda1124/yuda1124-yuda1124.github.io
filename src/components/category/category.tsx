import React from 'react';
import * as styles from './category.module.scss';

type CategoryProps = {
  categories: string[];
  selectedCategory: string;
  setCategory: (category: string) => void;
};

const Category = ({ categories, selectedCategory, setCategory }: CategoryProps) => {
  const renderCategories = () =>
    ['ALL', ...categories].map(category => (
      <li key={category} className={styles.line}>
        <button
          type="button"
          className={selectedCategory === category ? `${styles.btn_category} ${styles.selected}` : styles.btn_category}
          onClick={() => setCategory(category)}>
          {category}
        </button>
      </li>
    ));
  return (
    <div className={styles.container}>
      <ul className={styles.tabs}>{renderCategories()}</ul>
    </div>
  );
};

export { Category };
