import React from 'react';
import { skills } from '../../data/constants';
import StarCanvas from '../canvas/Stars';
import {
  Container, Wrapper, Title, Desc,
  SkillColumnGrid, SkillColumn, CategoryTitle,
  HexRow, HexCard, HexImage, HexName
} from './SkillsStyle';

const Skills = () => {
  // Helper to break the skill array into [ [2], [1], [2], [1] ] pattern
  const groupSkills = (skillList) => {
    const rows = [];
    let i = 0;
    while (i < skillList.length) {
      // Alternates between taking 2 skills and 1 skill
      rows.push(skillList.slice(i, i + 2));
      i += 2;
      if (i < skillList.length) {
        rows.push(skillList.slice(i, i + 1));
        i += 1;
      }
    }
    return rows;
  };

  return (
    <Container id="Skills">
      <StarCanvas />
      <Wrapper>
        <Title>Skills</Title>
        <Desc>"I am a software engineer specializing in building scalable web architectures. This technical hive represents my core expertise in Laravel and PHP for robust backends, interlocking with React, Bootstrap, HTML, and CSS to create seamless, high-performance user experiences."</Desc>

        <SkillColumnGrid>
          {skills.map((category, index) => (
            <SkillColumn key={`col-${index}`}>
              <CategoryTitle>{category.title}</CategoryTitle>
              {groupSkills(category.skills).map((row, rowIdx) => (
                <HexRow key={`row-${rowIdx}`} $isSingle={row.length === 1}>
                  {row.map((skill, sIdx) => (
                    <HexCard key={`skill-${sIdx}`}>
                      <HexImage src={skill.image} alt={skill.name} />
                      <HexName>{skill.name}</HexName>
                    </HexCard>
                  ))}
                </HexRow>
              ))}
            </SkillColumn>
          ))}
        </SkillColumnGrid>
      </Wrapper>
    </Container>
  );
};

// FIXED: Resolves the 'Module not found' crash
export default Skills;