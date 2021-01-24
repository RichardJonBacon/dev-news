import React from 'react';
import styles from './Sorter.module.css';

const Sorter = ({ sort_by, order, handleInputChange }) => {
  return (
    <form className={styles.form}>
      <p className={styles.formLabel}>Sorted By:</p>
      <label className={styles.label} htmlFor="sort_by" aria-label="sort_by">
        <select
          className={styles.selector}
          value={sort_by}
          name="sort_by"
          id="sort_by"
          onChange={handleInputChange}
        >
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </label>

      <label className={styles.label} htmlFor="order" aria-label="order">
        <select
          className={styles.selector}
          value={order}
          name="order"
          id="order"
          onChange={handleInputChange}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </form>
  );
};

export default Sorter;
