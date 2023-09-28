# Исходные списки с именами
list1 = <<~HEREDOC
  VM533:42 57. example1
  VM533:42 58. example2
HEREDOC

list2 = <<~HEREDOC
  VM533:42 60. example2
  VM533:42 61. example3
  VM533:42 62. example4
HEREDOC

# Разделяем списки на строки и очищаем их от лишнего
cleaned_list1 = list1.split("\n").map { |line| line.split('. ').last }
cleaned_list2 = list2.split("\n").map { |line| line.split('. ').last }

# Находим имена, которых нет в первом списке
missing_names = cleaned_list2 - cleaned_list1

# Выводим имена, которых нет в первом списке
missing_names.each do |difference|
  puts difference
end
