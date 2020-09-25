//Java Solution

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        int wordCount = words.length;
        int wordLength = words[0].length();
        List<Integer> result = new ArrayList<>();
        Map<String, Integer> map = new HashMap<>();
        
        for (int i = 0; i < words.length; i++) {
            map.put(words[i], map.getOrDefault(words[i], 0) + 1);
        }
        
        for (int i = 0; i < s.length() - (wordCount * wordLength) + 1; i++) {
            Map<String, Integer> wordsSeen = new HashMap<>();
            for (int j = 0; j < wordCount; j++) {
                int wordIndex = i + (j * wordLength);
                String word = s.substring(wordIndex, wordIndex + wordLength);
                wordsSeen.put(word, wordsSeen.getOrDefault(word, 0) + 1);
                
                if (!map.containsKey(word) || wordsSeen.get(word) > map.get(word)) {
                    break;
                }
                
                if (j + 1 == wordCount) {
                    result.add(i);
                }
            }
        }
        
        return result;
    }
}