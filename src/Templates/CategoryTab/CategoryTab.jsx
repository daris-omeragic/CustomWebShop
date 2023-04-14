import Text from '../../components/Text/Text';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { colors, fontFamily, fontSize, fontWeight } from "../../util/theme";
import React, { useState } from 'react';
import categories from './Categories';
import SubCategories from "./SubCategories";


const CategoryTab = () => {
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1);
  const [activeSubCategories, setActiveSubCategories] = useState(new Array(categories.length).fill(-1));
  const [isOverSubCategory, setIsOverSubCategory] = useState(false);
  const styles = {
    container: {
      display: 'flex',
    },
    category: {
      color: colors.cleanWhite,
      margin: '0px 25px',
      fontSize: fontSize.optimal,
      cursor: 'pointer',
      borderBottom: "1px solid",
      fontFamily : fontFamily.LatoThin,
      fontWeight : fontWeight.bold
    },
    textConatiner: {
      display: "flex",
      justifyContent: 'center',
      width: "90%",
      height: "20%",
      alignItems: "center",
      position: "fixed",
      visibility: isCategoryHovered ? 'hidden' : 'visible',
    },
    tittle: {
      position: 'fixed',
      fontSize: fontSize.xxLarge,
      letterSpacing: "7px",
      color : colors.black,
      fontFamily : fontFamily.LatoThin,
      fontWeight: fontWeight.mediumBold,
    },
    subtitle: {
      position: 'relative',
      fontSize: fontSize.large,
      letterSpacing: "5px",
      fontWeight: fontWeight.bold,
      top: "3rem",
      fontFamily : fontFamily.LatoThin
    }
    
  };

  const subCategoryStyles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '20px 0px',
      flexDirection: 'row',
      width: '100%',
    },
    subCategory: {
      cursor: 'pointer',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      background: colors.gray,
      color: "white",
      alignItems: 'center',
      fontSize: fontSize.optimal,
      fontWeight: fontWeight.medium,
      padding: '15px',
      transition: 'height 0.8s ease-out',
      width : "30%",
      opacity : '90%',
      letterSpacing : "0px",
      fontFamily : fontFamily.LatoThin,
    },
    activeSubCategory: {
      borderColor: colors.primary,
    },
  };

  const handleCategoryHover = (index) => {
    setIsCategoryHovered(true);
    setActiveCategoryIndex(index);
    const updatedActiveSubCategories = activeSubCategories.map((item, idx) =>
      idx === index ? 1 : item
    );
    setActiveSubCategories(updatedActiveSubCategories);
  };


  const handleSubCategoryHover = (categoryIndex, subCategoryIndex) => {
    const updatedActiveSubCategories = [...activeSubCategories];
    updatedActiveSubCategories[categoryIndex] = subCategoryIndex;
    setActiveSubCategories(updatedActiveSubCategories);
    setIsCategoryHovered(true);
    setActiveCategoryIndex(categoryIndex);
    setIsOverSubCategory(true);
  };
  const handleCategoryLeave = () => {
    setTimeout(() => {
      if (!isOverSubCategory) {
        setIsCategoryHovered(false);
        setActiveCategoryIndex(-1);
        setActiveSubCategories(activeSubCategories.map(() => -1));
      }
    }, 1000);
  };

  const handleSubCategoryLeave = () => {
    setIsOverSubCategory(false);
    setActiveSubCategories(activeSubCategories.map(() => -1));
  };

  const handleSubCategoryClick = (categoryIndex, subCategoryIndex) => {
    const updatedActiveSubCategories = [...activeSubCategories];
    if (categoryIndex !== activeCategoryIndex) {
      updatedActiveSubCategories.fill(-1);
    }
    if (activeCategoryIndex >= 0 && updatedActiveSubCategories[activeCategoryIndex] === subCategoryIndex) {
      updatedActiveSubCategories[activeCategoryIndex] = -1;
    } else {
      updatedActiveSubCategories[categoryIndex] = subCategoryIndex;
    }
    setActiveSubCategories(updatedActiveSubCategories);
    setActiveCategoryIndex(categoryIndex);
  };


  return (
    <>
      <SimplifiedDiv style={styles.container}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={styles.category}
            onMouseEnter={() => handleCategoryHover(index)}
            onMouseLeave={() => handleCategoryLeave()}
          >
            {category.name}
          </div>
        ))}
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.textConatiner}>
        <Text style={styles.tittle}>THE SPRING EVENT</Text>
        <Text style={styles.subtitle}>NOW UP TO 50% OFF</Text>
      </SimplifiedDiv>
      {(isCategoryHovered || activeSubCategories.some((subCat) => subCat >= 0)) &&
        SubCategories.map((subCat, categoryIndex) => (
          categoryIndex === activeCategoryIndex && (
            <div
              key={categoryIndex}
              style={subCategoryStyles.container}
              onMouseEnter={() => handleSubCategoryHover(categoryIndex, activeSubCategories[categoryIndex])}
              onMouseLeave={() => handleSubCategoryLeave()}
            >
              {subCat.subCategories.map((item, subCategoryIndex) => (
                <SimplifiedDiv
                  key={subCategoryIndex}
                  style={{
                    ...subCategoryStyles.subCategory,
                    ...(activeSubCategories[categoryIndex] === subCategoryIndex && subCategoryStyles.activeSubCategory),
                  }}
                  onClick={() => handleSubCategoryClick(categoryIndex, subCategoryIndex)}
                >
                  {item.name}
                </SimplifiedDiv>
              ))}
            </div>
          )
        ))}
    </>
  )}

export default CategoryTab;