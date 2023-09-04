import { pets } from "src/pets/schema/pets.schema";

type filtersResultEnt = (pets[] | { message: string; error: any; })[]


function deleteDuplicate(arr1: pets[], arr2: pets[]) {
  // Combine both arrays into a single array
  const combinedSet = arr1.concat(arr2);

  // Use filter to remove duplicates based on the 'id' property
  const uniquePets = combinedSet.filter((value, index, self) => {
    // Find the first index of the current element with a matching 'id'
    const firstIndex = self.findIndex((item) => item.id === value.id);

    // If the current element's index is the same as the first index, it's unique
    return index === firstIndex;
  });

  return uniquePets;
}


const extractFirstPet = (results: filtersResultEnt) => {
  // Initialize an empty array to store the extracted pets
  let resultsList: pets[] = [];

  // Iterate through the 'results' array
  results.forEach(result => {
    // Check if 'result' is an array
    if (!Array.isArray(result)) return;

    // Concatenate the 'result' array with 'resultsList' to accumulate pets
    resultsList = resultsList.concat(result);
  });

  // Return the accumulated 'resultsList' containing the extracted pets
  return resultsList;
}


export const filtersListJoin = (breedsResults: filtersResultEnt, subBreedsResults: filtersResultEnt) => {
  // Extract the first pet from 'breedsResults' and 'subBreedsResults'
  const newBreeds = extractFirstPet(breedsResults);
  const newSubBreeds = extractFirstPet(subBreedsResults);

  // Remove duplicates and return the result
  return deleteDuplicate(newBreeds, newSubBreeds);
};

